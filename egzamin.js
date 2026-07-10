
        function but() {
            let div = document.getElementById("result");

            if (document.getElementById("man").checked) {
                div.innerHTML = `
                    <img src="malik.jpg" width="250">`;
            } else if (document.getElementById("woman").checked) {
                div.innerHTML = `
                    <img src="https://avatars.mds.yandex.net/i?id=ce1f15909368186c671ff840a4eda3f1ecff86d0-5232346-images-thumbs&n=13" width="250">`;
            } else {
                div.innerHTML = "Belgila";
            }
        }
