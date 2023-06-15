SELECT g.games_id AS id, g.player_black_id AS opponent_id, g.player_red_id AS player_id,
    IF(g.winner_id=g.player_red_id, CONCAT(u1.username, " WON against ", u2.username),
        CONCAT(u2.username, " WON against ",u1.username)) AS winner,
    u1.username AS player, u2.username AS opponent,  g.moves, g.kings_promoted_black AS black_kings,
    g.kings_promoted_red AS red_kings, g.tears_shed AS tears, date_format(g.game_start_time, "%m/%d/%Y (%W)") AS date,
    time_format(g.game_start_time, "%r") as time,
    g.game_start_time AS start_time, g.game_duration AS duration
FROM games g, users u1, users u2
where g.player_red_id = u1.user_id
and g.player_black_id = u2.user_id
and g.games_id = ?;