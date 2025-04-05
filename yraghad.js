document.addEventListener("DOMContentLoaded", function () {
    const tracker = document.getElementById("progress-tracker");

    // إنشاء مربعات الأيام من 1 إلى 30
    for (let i = 1; i <= 30; i++) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "day" + i;

        // استرجاع القيمة من localStorage
        const savedValue = localStorage.getItem(checkbox.id);
        if (savedValue === "true") {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;

        // طريقة آمنة لترتيب العناصر داخل الليبل
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` اليوم ${i}`));

        tracker.appendChild(label);
    }
});