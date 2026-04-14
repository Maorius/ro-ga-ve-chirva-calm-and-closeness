
כן — יש בהחלט מצב שעדיין יש לסרטון בעיות טעינה, גם אחרי המעבר ל-`public/`.

מה ראיתי בקוד:
- הסרטון ב-`HeroSection.tsx` תלוי ב-`onCanPlay` כדי לצאת ממצב טעינה.
- אם `onCanPlay` לא נורה בזמן, המשתמשת נשארת עם שכבת loading/פוסטר, ואז לפעמים רק רענון פותר את זה.
- כרגע אין טיפול ב-`onError`, `onStalled`, `onWaiting`, `onLoadedData`, או timeout fallback.
- יש גם תלות ב-`IntersectionObserver` להפעלה אוטומטית, כך שאם טעינה/ניגון נתקעים בנקודת ביניים, ה-UI יכול להישאר לא מסונכרן עם מצב הווידאו.

לכן התלונה נשמעת הגיונית.

### Plan: harden Hero video loading

1. לחזק את אירועי הטעינה של הווידאו ב-`src/components/sections/HeroSection.tsx`
- להוסיף handlers עבור:
  - `onLoadedData`
  - `onPlaying`
  - `onWaiting`
  - `onStalled`
  - `onError`
- להשתמש בהם כדי לעדכן בצורה אמינה:
  - `isLoading`
  - `isPlaying`
  - `hasError` / `showFallback`

2. להפסיק להסתמך רק על `onCanPlay`
- להשאיר אותו, אבל לא כטריגר יחיד להסרת loading.
- אם `loadeddata` או `playing` הגיעו, להסיר spinner ולהציג את הווידאו.

3. להוסיף fallback אם הווידאו לא נטען תוך זמן סביר
- להגדיר timeout קצר (למשל 6–8 שניות).
- אם הווידאו לא מוכן בזמן:
  - להסתיר spinner אינסופי
  - להשאיר poster גלוי
  - להציג הודעה/כפתור “נסי להפעיל את הסרטון”
- כך המשתמשת לא תרגיש שהעמוד “תקוע”.

4. לשפר את לוגיקת ההפעלה האוטומטית
- כשהסרטון נכנס שוב ל-view:
  - לנסות `play()` רק אם יש מספיק דאטה או אם אין שגיאה.
- אם `play()` נכשל:
  - לא להשאיר `isPlaying=true`
  - לעבור למצב pause ברור עם overlay תקין.

5. להוסיף graceful degradation למובייל/רשת חלשה
- לשמור poster זמין תמיד.
- לוודא שהווידאו נשאר נראה גם אם הניגון לא התחיל עדיין.
- במצב כשל, לא להציג “מסך שחור” אלא את תמונת ה-poster.

### Expected result
- פחות מקרים שבהם הווידאו “לא עולה” עד refresh
- פחות מצבים של “audio/video playing but not visible”
- UX יציב יותר גם בחיבור איטי או במכשירים חלשים

### Technical details
קובץ לשינוי:
- `src/components/sections/HeroSection.tsx`

שינויים עיקריים:
- הוספת state נוסף כמו `hasError` / `showManualPlay`
- הוספת event handlers לטעינה/שגיאה
- הוספת timeout cleanup בתוך `useEffect`
- התאמת ה-IntersectionObserver כך שלא ינסה לנגן במצב שגיאה/טעינה לא מוכנה
