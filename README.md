# Mobile Eye Clinic - Landing Page

موقع Landing Page احترافي لـ Mobile Eye Clinic (عيادة عيون متنقلة) مع دعم كامل للغتين العربية والإنجليزية.

## 🚀 المميزات

- ✅ تصميم Responsive (Mobile / Tablet / Desktop)
- ✅ دعم RTL/LTR مع زر تبديل اللغة
- ✅ GSAP Animations احترافية (Page Load, ScrollTrigger, Hover)
- ✅ Form Validation مع أنيميشن
- ✅ تصميم طبي عصري بألوان متناسقة
- ✅ أداء عالي وسرعة تحميل ممتازة
- ✅ كود نظيف ومنظم مع تعليقات

## 📁 هيكل الملفات

```
eye-clinic-cursor/
├── index.html      # ملف HTML الرئيسي
├── styles.css      # ملف CSS مع جميع الأنماط
├── script.js       # ملف JavaScript مع GSAP animations
└── README.md       # ملف التوثيق
```

## 🛠️ التقنيات المستخدمة

- **HTML5** - هيكل الصفحة
- **CSS3** - التصميم والأنماط (Flexbox + Grid)
- **JavaScript (Vanilla)** - الوظائف التفاعلية
- **GSAP 3.12.2** - الأنيميشن الاحترافية
- **Font Awesome 6.4.0** - الأيقونات
- **Google Fonts** - الخطوط (Cairo للعربي، Poppins للإنجليزي)

## 🎨 الأقسام

1. **Hero Section** - قسم البطل مع أنيميشن تحميل الصفحة
2. **Why Choose Us** - لماذا تختارنا مع كروت مميزة
3. **Services** - الخدمات المتاحة
4. **How It Works** - خطوات العمل مع Timeline Animation
5. **Booking Form** - نموذج الحجز مع Validation
6. **CTA Section** - دعوة للعمل
7. **Footer** - معلومات التواصل وروابط السوشيال ميديا

## 🚀 كيفية الاستخدام

### 1. فتح الموقع

افتح ملف `index.html` مباشرة في المتصفح أو استخدم خادم محلي:

```bash
# باستخدام Python
python -m http.server 8000

# أو باستخدام Node.js (http-server)
npx http-server
```

ثم افتح المتصفح على: `http://localhost:8000`

### 2. تبديل اللغة

- اضغط على زر اللغة في الزاوية العلوية
- سيتم التبديل بين العربية (RTL) والإنجليزية (LTR)
- يتم حفظ التفضيل في LocalStorage

## 🎨 التخصيص

### تغيير الألوان

في ملف `styles.css`، قم بتعديل المتغيرات في `:root`:

```css
:root {
    --primary-color: #0066cc;      /* اللون الأساسي */
    --secondary-color: #00bcd4;    /* اللون الثانوي */
    --accent-color: #0097a7;       /* لون التمييز */
    /* ... */
}
```

### تغيير النصوص

جميع النصوص في HTML تحتوي على `data-ar` و `data-en`:

```html
<h2 data-ar="النص العربي" data-en="English Text">النص العربي</h2>
```

### تعديل معلومات التواصل

في قسم Footer في `index.html`:

```html
<li>
    <i class="fas fa-phone"></i>
    <span>+966 50 123 4567</span>  <!-- رقم الهاتف -->
</li>
```

### إضافة/تعديل الخدمات

في قسم Services، أضف أو عدل كروت الخدمات:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 data-ar="اسم الخدمة" data-en="Service Name">اسم الخدمة</h3>
    <p data-ar="وصف الخدمة" data-en="Service Description">وصف الخدمة</p>
</div>
```

### تعديل الأنيميشن

في ملف `script.js`، يمكنك تعديل:

- **Page Load Animation**: دالة `initPageLoadAnimation()`
- **Scroll Animations**: دالة `initScrollAnimations()`
- **Hover Animations**: دالة `initHoverAnimations()`

مثال:

```javascript
// تغيير سرعة الأنيميشن
gsap.to('.element', {
    duration: 1,  // تغيير من 0.8 إلى 1
    ease: 'power3.out'
});
```

### ربط نموذج الحجز بـ API

في ملف `script.js`، ابحث عن:

```javascript
// Simulate API delay
await new Promise(resolve => setTimeout(resolve, 1500));
```

واستبدله بـ:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});

if (!response.ok) {
    throw new Error('Network response was not ok');
}

const result = await response.json();
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🎯 GSAP Animations

### Page Load Animation
- Fade in للعنوان والوصف
- Slide up للأزرار
- Scale animation للأشكال الخلفية

### ScrollTrigger Animations
- Feature Cards: Fade + Slide up مع Stagger
- Service Cards: Scale + Fade
- Steps: Rotation + Slide
- Section Headers: Fade + Slide

### Hover Animations
- Feature Cards: Scale + Rotation للأيقونات
- Service Cards: Scale + Rotation للأيقونات
- Buttons: Scale effect

## ✅ Form Validation

النموذج يتحقق من:
- ✅ جميع الحقول المطلوبة
- ✅ صحة رقم الهاتف (10 أرقام على الأقل)
- ✅ رسائل خطأ واضحة مع أنيميشن

## 🔧 المتصفحات المدعومة

- Chrome (آخر إصدارين)
- Firefox (آخر إصدارين)
- Safari (آخر إصدارين)
- Edge (آخر إصدارين)

## 📝 ملاحظات مهمة

1. **GSAP CDN**: الموقع يستخدم GSAP من CDN. تأكد من اتصال الإنترنت.
2. **Font Awesome**: الأيقونات من Font Awesome CDN.
3. **Google Fonts**: الخطوط من Google Fonts CDN.
4. **LocalStorage**: يتم حفظ تفضيل اللغة في LocalStorage.

## 🐛 استكشاف الأخطاء

### الأنيميشن لا تعمل
- تأكد من تحميل GSAP و ScrollTrigger
- افتح Console للتحقق من الأخطاء

### اللغة لا تتغير
- تأكد من وجود `data-ar` و `data-en` في العناصر
- تحقق من Console للأخطاء

### النموذج لا يرسل
- تأكد من ملء جميع الحقول المطلوبة
- تحقق من صحة رقم الهاتف

## 📄 الترخيص

هذا المشروع مفتوح المصدر ويمكن استخدامه بحرية.

## 👨‍💻 الدعم

لأي استفسارات أو مشاكل، يرجى فتح Issue في المستودع.

---

**تم التطوير بـ ❤️ للمساهمة في تحسين رعاية العيون**
