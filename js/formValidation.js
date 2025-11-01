// "use strict";

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("._form");

//     // CONTACT SELECT MULTI-TOGGLE
//     const contactSelect = document.querySelector(".js-contact-select");
//     const options = contactSelect.querySelectorAll("._form-group__select-option");
//     const tagsContainer = document.querySelector("._form-group__select-tags");

//     options.forEach(option => {
//         option.addEventListener("click", function () {

//             const fieldID = option.dataset.showField;
//             const targetField = document.getElementById(fieldID);

//             // Toggle selection
//             option.classList.toggle("active");

//             if (option.classList.contains("active")) {

//                 // ✅ ACTIVATE ONLY THIS FIELD
//                 targetField.classList.add("active");
//                 targetField.style.display = "block";

//                 // ✅ ADD TAG
//                 const tag = document.createElement("span");
//                 tag.classList.add("contact-tag");
//                 tag.dataset.field = fieldID;
//                 tag.innerHTML = `${option.textContent.trim()} <i class="tag-remove"></i>`;
//                 tagsContainer.appendChild(tag);

//                 // Add remove handler
//                 tag.querySelector(".tag-remove").addEventListener("click", function () {
//                     removeTag(fieldID);
//                 });

//             } else {
//                 // Unselect → remove tag & deactivate field
//                 removeTag(fieldID);
//             }
//         });
//     });


//     // ✅ FUNCTION: remove tag, unselect option, hide field, clear validation
//     function removeTag(fieldID) {
//         const option = document.querySelector(
//             `._form-group__select-option[data-show-field="${fieldID}"]`
//         );

//         const field = document.getElementById(fieldID);

//         // ✅ Unselect the option
//         if (option) option.classList.remove("active");

//         // ✅ Deactivate only THIS field
//         if (field) {
//             field.classList.remove("active");
//             field.style.display = "none";

//             // ✅ Clear validation errors only for THIS field
//             field.classList.remove("req_error");
//             field.classList.remove("error_error");

//             field.querySelectorAll("input").forEach(i => {
//                 i.classList.remove("req_error");
//                 i.classList.remove("error_error");
//             });
//         }

//         // ✅ Remove the tag
//         const tag = tagsContainer.querySelector(
//             `span.contact-tag[data-field="${fieldID}"]`
//         );
//         if (tag) tag.remove();
//     }

//     // FORM SUBMIT
//     if (form) {
//         form.addEventListener("submit", function (e) {
//             formSubmit(e, form);
//         });

//         // Radio remove error
//         const radios = form.querySelectorAll('input[name="deps"]');
//         radios.forEach(radio => {
//             radio.addEventListener("change", function () {
//                 const fieldset = radio.closest("fieldset");
//                 fieldset.classList.remove("_error");
//             });
//         });
//     }

//     async function formSubmit(e, form) {
//         e.preventDefault();
//         let error = formValidate(form);

//         if (error === 0) {
//             form.submit();
//         }
//     }

//     function formValidate(form) {
//         let error = 0;

//         let formReq = form.querySelectorAll("._req");
//         for (let input of formReq) {

//             const group = input.closest("._form-group");

//             // ✅ Only validate if contact field group is ACTIVE
//             if (group && group.classList.contains("_form-group__input")) {
//                 if (!group.classList.contains("active")) {
//                     continue; // ⛔ skip hidden / unselected fields
//                 }
//             }

//             // remove old errors
//             formRemove_Req_Error(input);

//             if (input.type === "radio") continue;

//             if (input.classList.contains("_email")) {
//                 if (input.value.trim() === "") {
//                     formAddReq(input);
//                     error++;
//                 } else if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else {
//                 if (input.value.trim() === "") {
//                     formAddReq(input);
//                     error++;
//                 }
//             }
//         }


//         //  RADIO VALIDATION
//         const radioGroup = form.querySelectorAll('input[name="deps"]');
//         if (radioGroup.length) {
//             const checked = form.querySelector('input[name="deps"]:checked');
//             const fieldset = radioGroup[0].closest("fieldset");

//             if (!checked) {
//                 fieldset.classList.add("_error");
//                 error++;
//             } else {
//                 fieldset.classList.remove("_error");
//             }
//         }

//         return error;
//     }

//     function formAddReq(input) {
//         input.closest("._form-group").classList.add("req_error");
//     }

//     function formAddError(input) {
//         input.closest("._form-group").classList.add("error_error");
//     }

//     function formRemove_Req_Error(input) {
//         input.closest("._form-group").classList.remove("req_error");
//         input.closest("._form-group").classList.remove("error_error");
//     }

//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }

// });

// document.addEventListener("DOMContentLoaded", function () {

//     const selectBox = document.querySelector(".js-contact-select");
//     const selectTitle = selectBox.querySelector("._form-group__select-title");

//     // CLICK TITLE → TOGGLE DROPDOWN
//     selectTitle.addEventListener("click", function () {
//         selectBox.classList.toggle("open");
//     });
//     document.addEventListener("click", function (e) {
//         if (!selectBox.contains(e.target)) {
//             selectBox.classList.remove("open");
//         }
//     });

//     // TOGGLE SELECT 
//     var selectContainer = document.querySelectorAll(".select-container");
//     selectContainer.forEach(s => {
//         var select = s.querySelector(".select");
//         var input = s.querySelector(".select-input");
//         var options = s.querySelectorAll(".option");
//         select.onclick = (event) => {
//             s.classList.toggle('active');
//         };
//         options.forEach((e) => {
//             e.addEventListener("click", () => {
//                 input.value = e.innerText;
//                 s.classList.remove("active");
//                 options.forEach(opt => {
//                     opt.classList.remove("selected");
//                 });
//                 e.classList.add("selected");
//             });
//         });
//         document.addEventListener('click', (event) => {
//             if (!s.contains(event.target) && s.classList.contains('active')) {
//                 s.classList.remove('active');
//             }
//         });
//     });
// });



"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("._form");

    // CONTACT SELECT MULTI-TOGGLE
    const contactSelect = document.querySelector(".js-contact-select");
    const options = contactSelect.querySelectorAll("._form-group__select-option");
    const tagsContainer = document.querySelector("._form-group__select-tags");

    options.forEach(option => {
        option.addEventListener("click", function () {

            const fieldID = option.dataset.showField;
            const targetField = document.getElementById(fieldID);

            // Toggle selection
            option.classList.toggle("active");

            if (option.classList.contains("active")) {

                // ✅ Activate this field
                targetField.classList.add("active");
                targetField.style.display = "block";

                // ✅ Add tag
                const tag = document.createElement("span");
                tag.classList.add("contact-tag");
                tag.dataset.field = fieldID;
                tag.innerHTML = `${option.textContent.trim()} <i class="tag-remove"></i>`;
                tagsContainer.appendChild(tag);

                tag.querySelector(".tag-remove").addEventListener("click", function () {
                    removeTag(fieldID);
                });

            } else {
                // unselect → remove tag & deactivate field
                removeTag(fieldID);
            }
        });
    });

    // ✅ REMOVE TAG + HIDE FIELD + CLEAR ERRORS
    function removeTag(fieldID) {
        const option = document.querySelector(`._form-group__select-option[data-show-field="${fieldID}"]`);
        const field = document.getElementById(fieldID);

        if (option) option.classList.remove("active");

        if (field) {
            field.classList.remove("active");
            field.style.display = "none";

            // remove errors
            field.classList.remove("req_error", "error_error");
            field.querySelectorAll("input").forEach(i => {
                i.classList.remove("req_error", "error_error");
            });
        }

        const tag = tagsContainer.querySelector(`span.contact-tag[data-field="${fieldID}"]`);
        if (tag) tag.remove();
    }

    // FORM SUBMIT
    if (form) {
        form.addEventListener("submit", function (e) {
            formSubmit(e, form);
        });

        // ✅ RADIOS: remove error on change
        const radios = form.querySelectorAll('input[name="deps"]');
        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                const fieldset = radio.closest("fieldset");
                fieldset.classList.remove("_error");
            });
        });
    }

    async function formSubmit(e, form) {
        e.preventDefault();
        let error = formValidate(form);

        if (error === 0) {
            form.submit();
        }
    }

    // ✅ FORM VALIDATION
    function formValidate(form) {
        let error = 0;

        let formReq = form.querySelectorAll("._req");
        for (let input of formReq) {

            const group = input.closest("._form-group");

            // Skip inactive contact fields
            if (group && group.classList.contains("_form-group__input")) {
                if (!group.classList.contains("active")) {
                    continue;
                }
            }

            formRemove_Req_Error(input);

            if (input.type === "radio") continue;

            if (input.classList.contains("_email")) {
                if (input.value.trim() === "") {
                    formAddReq(input);
                    error++;
                } else if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value.trim() === "") {
                    formAddReq(input);
                    error++;
                }
            }
        }

        // ✅ RADIO VALIDATION
        const radioGroup = form.querySelectorAll('input[name="deps"]');
        if (radioGroup.length) {
            const checked = form.querySelector('input[name="deps"]:checked');
            const fieldset = radioGroup[0].closest("fieldset");

            if (!checked) {
                fieldset.classList.add("_error");
                error++;
            } else {
                fieldset.classList.remove("_error");
            }
        }

        return error;
    }

    // ✅ ADD ERROR (required)
    function formAddReq(input) {
        input.closest("._form-group").classList.add("req_error");
    }

    // ✅ ADD ERROR (email invalid)
    function formAddError(input) {
        input.closest("._form-group").classList.add("error_error");
    }

    // ✅ REMOVE BOTH
    function formRemove_Req_Error(input) {
        input.closest("._form-group").classList.remove("req_error", "error_error");
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // ✅ LIVE VALIDATION — NORMAL INPUTS + EMAIL
    const liveInputs = form.querySelectorAll("._form-group__input input");

    liveInputs.forEach(inp => {
        inp.addEventListener("input", function () {

            const group = inp.closest("._form-group");

            // Skip hidden inactive fields
            if (group && group.classList.contains("_form-group__input") && !group.classList.contains("active")) {
                return;
            }

            // ✅ Remove required error when typing
            if (inp.value.trim() !== "") {
                group.classList.remove("req_error");
            }

            // ✅ Email live validation
            if (inp.classList.contains("_email")) {
                if (!emailTest(inp)) {
                    group.classList.remove("error_error");
                }
            }
        });
    });

    // ✅ LIVE VALIDATION — CUSTOM SELECTS
    document.querySelectorAll(".select-container").forEach(container => {
        const input = container.querySelector(".select-input");
        const group = container.closest("._form-group"); // ✅ correct parent

        container.querySelectorAll(".option").forEach(option => {
            option.addEventListener("click", function () {

                // ✅ option sets value
                input.value = option.innerText.trim();

                // ✅ remove required error from group
                if (input.value !== "") {
                    group.classList.remove("req_error");
                }
            });
        });
    });


});


// ✅ CONTACT SELECT DROPDOWN TOGGLE (unchanged)
document.addEventListener("DOMContentLoaded", function () {

    const selectBox = document.querySelector(".js-contact-select");
    const selectTitle = selectBox.querySelector("._form-group__select-title");

    selectTitle.addEventListener("click", function () {
        selectBox.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove("open");
        }
    });

    // ✅ CUSTOM SELECT TOGGLE
    var selectContainer = document.querySelectorAll(".select-container");
    selectContainer.forEach(s => {
        var select = s.querySelector(".select");
        var input = s.querySelector(".select-input");
        var options = s.querySelectorAll(".option");

        select.onclick = () => s.classList.toggle('active');

        options.forEach((e) => {
            e.addEventListener("click", () => {
                input.value = e.innerText;
                s.classList.remove("active");
                options.forEach(opt => opt.classList.remove("selected"));
                e.classList.add("selected");
            });
        });

        document.addEventListener('click', (event) => {
            if (!s.contains(event.target) && s.classList.contains('active')) {
                s.classList.remove('active');
            }
        });
    });
});
