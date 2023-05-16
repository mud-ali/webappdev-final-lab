INSERT INTO games(
    moves,
    player_red_id,
    player_black_id,
    winner_id,
    game_start_time,
    game_duration,
    kings_promoted_black,
    kings_promoted_red,
    tears_shed
) VALUES(
    ?, ?, ?, ?, ?, ?, ?, ?, ?
)