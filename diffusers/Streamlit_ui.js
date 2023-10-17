async function generateImage() {
        // Menampilkan gambar loading
        const loadingDiv = document.getElementById("loading");
        loadingDiv.style.display = "block";

        // Menyembunyikan gambar yang sudah ada jika ada
        const generatedImage = document.getElementById("generatedImage");
        generatedImage.style.display = "none";

        const Nprompt = document.getElementById("Negative_prompt").value;
        const prompt = document.getElementById("prompt").value;
        const modelSelect = document.querySelector(".dropdown");
        const selectedModel = modelSelect.value;

        // Generate angka acak
        const acak = Math.floor(Math.random() * (945 - 245 + 1)) + 245;
        const acak_str = acak.toString();

        // Kirim permintaan ke API Hugging Face
        const apiUrl = `https://api-inference.huggingface.co/models/${selectedModel}`;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "inputs": prompt + " seed:" + acak_str,
                "negative_prompt": Nprompt ,
                "num_inference_steps": 50,
            }),
        };

        try {

            const loadingDiv = document.getElementById("loading");
            loadingDiv.style.display = "block";

            // Menyembunyikan tombol download saat loading
            document.getElementById("downloadButton").style.display = "none";

            const response = await fetch(apiUrl, requestOptions);

            if (!response.ok) {
                throw new Error("Permintaan gagal");
            }

            const blob = await response.blob();

            // Sembunyikan gambar loading
            loadingDiv.style.display = "none";

            // Tampilkan gambar yang dihasilkan
            generatedImage.src = URL.createObjectURL(blob);
            generatedImage.style.display = "block";

            // Tampilkan tombol download
            const downloadLink = document.getElementById("downloadLink");
            const downloadButton = document.getElementById("downloadButton");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.style.display = "block";
            downloadButton.style.display = "block";

        } catch (error) {
            // Jika permintaan gagal, tunggu beberapa detik dan coba lagi
            setTimeout(generateImage, 5000);
        }
                                                 }
