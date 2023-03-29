import dotenv from 'dotenv';
dotenv.config();
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, { polling: true });

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Received your message');
});
