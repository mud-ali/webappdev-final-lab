SELECT * FROM games g
INNER JOIN users u1 ON g.player_red_id = u1.user_id
INNER JOIN users u2 ON g.player_black_id = u2.user_id;