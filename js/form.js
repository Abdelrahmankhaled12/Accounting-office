const btnn1 = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnn1.value = 'جاري الارسال';

        const serviceID = 'default_service';
        const templateID = 'template_kr52i8e';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnn1.value = 'تم الارسال ';
                swal({
                    title: "تم الارسال بنجاح",
                    text: "سيتم الرد عليك في اقرب وقت",
                    icon: "success",
                });
            }, (err) => {
                btnn1.value = 'تم الارسال ';
            });
    });
