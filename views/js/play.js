"use strict";
//describes the default starting position of the game
let boardPattern = [
    ["b", "", "b", "", "b", "", "b", ""],
    ["", "b", "", "b", "", "b", "", "b"],
    ["b", "", "b", "", "b", "", "b", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "r", "", "r", "", "r", "", "r"],
    ["r", "", "r", "", "r", "", "r", ""],
    ["", "r", "", "r", "", "r", "", "r"]
];
function showPossibleMoves(piece, show) {
    var _a, _b, _c;
    let row = (_b = (_a = piece.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.rowIndex;
    let col = (_c = piece.parentElement) === null || _c === void 0 ? void 0 : _c.cellIndex;
    if (row === undefined || col === undefined) {
        return;
    }
    let board = document.getElementById("board");
    let possibleMoves = getPossibleMoves(piece, row, col);
    console.log(possibleMoves);
    for (let move of possibleMoves) {
        let cell = board.getElementsByTagName("tr")[move[0]].getElementsByTagName("td")[move[1]];
        if (show) {
            cell.classList.add("possible-move");
        }
        else {
            cell.classList.remove("possible-move");
        }
    }
}
function getPossibleMoves(piece, row, col) {
    let possibleMoves = [];
    if (piece.classList.contains("red-checker")) {
        if (!piece.classList.contains("king")) {
            if (row > 0 && col > 0 && boardPattern[row - 1][col - 1] === "") {
                possibleMoves.push([row - 1, col - 1]);
                possibleMoves.push([row - 1, col + 1]);
            }
        }
    }
    return possibleMoves;
}
function getDistance(row1, col1, row2, col2) {
    let distanceX = Math.abs(row1 - row2);
    let distanceY = Math.abs(col1 - col2);
    if (distanceX === 2 && distanceY === 1) {
        return "move";
    }
    else if (distanceX === 3 && distanceY === 2) {
        return "jump";
    }
    else {
        return false;
    }
}
//return the div for a piece based on string representation
function getPiece(name) {
    let piece = document.createElement("div");
    piece.className = "piece";
    piece.addEventListener("click", function () {
        document.querySelectorAll(".selected").forEach(function (piece) {
            piece.classList.remove("selected");
            showPossibleMoves(piece, false);
        });
        if (piece.classList.contains("selected")) {
            piece.classList.remove("selected");
            showPossibleMoves(piece, false);
        }
        else {
            piece.classList.add("selected");
            showPossibleMoves(piece, true);
        }
    });
    if (name.startsWith("b")) {
        piece.classList.add("black-checker");
    }
    else if (name.startsWith("r")) {
        piece.classList.add("red-checker");
    }
    if (name.endsWith("k")) {
        piece.classList.add("king");
    }
    return piece;
}
//draw the board based on the array of strings used to represent it
function draw(board, pattern) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            board.getElementsByTagName("tr")[row].getElementsByTagName("td")[col]
                .appendChild(getPiece(pattern[row][col]));
        }
    }
}
function init() {
    draw(document.getElementById("board"), boardPattern);
}
window.onload = init;
