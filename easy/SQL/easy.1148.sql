/**
 * 1148. Article Views I
 */

select v.author_id as id
from views v
where v.author_id = v.viewer_id
GROUP by v.author_id
order by v.author_id