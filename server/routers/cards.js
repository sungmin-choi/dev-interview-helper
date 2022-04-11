const express = require('express');
const router = express.Router();
const { cards } = require('../controller/cards');

// 카드 조회
router.get('/', cards);

module.exports = router;
