# Sureway Church Weebly Customization Instructions

## How to Apply the Custom CSS to Your Weebly Site

### Step 1: Access Your Weebly Dashboard
1. Go to [weebly.com](https://www.weebly.com) and log in
2. Select your Sureway Church site to edit

### Step 2: Add Custom CSS
1. In the Weebly editor, click **Settings** (gear icon) in the left sidebar
2. Click **SEO** 
3. Scroll down to **Header Code**
4. Paste the following code block:

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">

<style>
/* Paste the entire contents of sureway_weebly_styles.css here */
</style>
```

5. Open `sureway_weebly_styles.css` (in Documents/sureway_website/) 
6. Copy ALL the CSS content
7. Paste it between the `<style>` and `</style>` tags
8. Click **Save**

### Step 3: Preview & Publish
1. Click **Preview** to see your changes
2. If it looks good, click **Publish** to make it live

---

## Color Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Parchment Background | `#F5F0E6` | Main page background |
| Cream | `#FAF7F0` | Section backgrounds |
| Warm Cream | `#EDE8DC` | Hero section |
| Dark Charcoal | `#2B2B2B` | Primary text |
| Sage Green | `#3A5A40` | Headings, buttons, links |
| Copper | `#B87333` | Accent text, highlights |
| Gold | `#C9A227` | Header/footer accents |
| Slate Blue | `#2C3E50` | Header & footer background |

---

## Typography

| Element | Font | Size |
|---------|------|------|
| Headings | Playfair Display | 2-3.5rem |
| Body Text | Lora | 1.1rem |
| Labels | Playfair Display (italic, uppercase) | 0.8rem |

---

## Tips for Best Results

1. **Keep existing Weebly elements** - The CSS will override their styles automatically
2. **Use section labels** - Add small italic headlines above major sections
3. **Scripture formatting** - Use Weebly's blockquote feature for Bible verses
4. **Buttons** - The CSS will style all Weebly buttons automatically

---

## Need Help?

If styles don't apply correctly:
- Make sure the code is in **Header Code**, not Footer
- Clear your browser cache and refresh
- Check that all copy/paste was complete (no missing brackets)
