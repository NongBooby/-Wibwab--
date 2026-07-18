// controllers/order.controller.js — รับ req → เรียก service → ส่ง response
const orderService = require('../services/order.service');
const { httpError } = require('../utils/validators');

async function create(req, res, next) {
  try {
    const data = await orderService.createOrder(req.user.id, req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

async function myOrders(req, res, next) {
  try {
    const data = await orderService.getMyOrders(req.user.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

async function uploadSlip(req, res, next) {
  try {
    if (!req.file) throw httpError(400, 'กรุณาแนบไฟล์สลิปโอนเงิน');
    const filePath = `/uploads/slips/${req.file.filename}`;
    const data = await orderService.attachSlip(req.user.id, req.params.id, filePath);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

async function cancel(req, res, next) {
  try {
    const data = await orderService.cancelOrder(req.user.id, req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

async function validatePromo(req, res, next) {
  try {
    const data = await orderService.validatePromo(req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

module.exports = { create, myOrders, uploadSlip, cancel, validatePromo };
