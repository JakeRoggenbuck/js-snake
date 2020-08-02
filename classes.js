export default class snake {
    constructor(num_blocks, blocks) {
        this.num_blocks = num_blocks;
        this.blocks = []
        for (var block_positions in blocks) {
            blocks.push(new block(
                block_positions["x_pos"],
                block_positions["y_pos"]
            ))
        }
    }
    draw_blocks(num_blocks, blocks) {
        for (var block = 0; block < num_blocks; block++) {
            blocks[block].draw_block()
        }
    }
}

class block {
    side_length = 50;
    constructor (x_position, y_position) {
        this.x_position = x_position;
        this.y_position = y_position;
    } 
    set_position (new_x, new_y) {
        this.x_position = new_x;
        this.y_position = new_y;
    }
    draw_block() {
        rect(x_position, y_position, side_length, side_length);
    }
}