/**
 * 1757. Recyclable and Low Fat Products
 */

select p.product_id from Products p
where p.low_fats='Y'
and p.recyclable='Y'