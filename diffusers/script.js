async function generateImage() {
        const loadingDiv = document.getElementById("loading");
        loadingDiv.style.display = "block";

        const generatedImage = document.getElementById("generatedImage");
        generatedImage.style.display = "none";

        const Nprompt = document.getElementById("Negative_prompt").value;
        const prompt = document.getElementById("prompt").value;
        const modelSelect = document.querySelector(".dropdown");
        const selectedModel = modelSelect.value;

        const acak = Math.floor(Math.random() * (945 - 245 + 1)) + 245;
        const acak_str = acak.toString();

        const apiUrl = `https://api-inference.huggingface.co/models/${selectedModel}`;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "inputs": prompt + " seed:" + acak_str,
                
                "parameters": {
                    "negative_prompt": Nprompt,
                    "width": 768,
                    "height": 768
                }
            }),
        };

        try {

            const loadingDiv = document.getElementById("loading");
            loadingDiv.style.display = "block";

            document.getElementById("downloadButton").style.display = "none";

            const response = await fetch(apiUrl, requestOptions);

            if (!response.ok) {
                throw new Error("Permintaan gagal");
            }

            const blob = await response.blob();

            loadingDiv.style.display = "none";

            generatedImage.src = URL.createObjectURL(blob);
            generatedImage.style.display = "block";

            const downloadLink = document.getElementById("downloadLink");
            const downloadButton = document.getElementById("downloadButton");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.style.display = "block";
            downloadButton.style.display = "block";

        } catch (error) {
            // Jika permintaan gagal, tunggu beberapa detik dan coba lagi
            setTimeout(generateImage, 15000);
        }
    }
