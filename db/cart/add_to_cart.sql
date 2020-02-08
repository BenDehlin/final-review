INSERT INTO order_items (
  customer_order_id,
  product_id,
  qty,
  price
) VALUES (
  ${order_id},
  ${product_id},
  1,
  ${price}
);