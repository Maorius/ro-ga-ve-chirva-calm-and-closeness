

## Plan: Switch LeadForm and ContactForm to Formspree

### What changes
Replace the Supabase database submission in both `LeadForm.tsx` and `ContactForm.tsx` with a `fetch` POST to `https://formspree.io/f/xbdpvqye`.

### Technical details

**Both forms** — replace the `try` block's Supabase call with:
```typescript
const response = await fetch("https://formspree.io/f/xbdpvqye", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: result.data.fullName.trim(),
    phone: result.data.phone.trim(),
    email: result.data.email?.trim() || "",
    message: result.data.message?.trim() || "",
  }),
});
if (!response.ok) throw new Error("Formspree error");
```

- Remove the `supabase` import from both files (if no longer used).
- Keep all validation, UI, toast messages, and success states exactly as they are.
- No other files change.

