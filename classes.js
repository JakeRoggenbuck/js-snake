let side_length = 20;
let block_distance = 5;
let block_to_block = side_length + block_distance;
let move_distance = 20;
const directions = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
  }
const keycodes = {
    W: 87,
    D: 68,
    S: 83,
    A: 65,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
}
class snake {
    constructor(head_x, head_y, color, head_direction) {
        this.blocks = [new block(head_x, head_y, head_direction)];
        this.color = color;
    }
    draw_blocks() {
        for (block in this.blocks) {
            this.blocks[block].draw_block(this.color);
        }
    }
    add_block() {
        var last_block = this.blocks.slice(-1)[0];
        // TODO: use variables and not an array
        var new_block_positions;
        switch(last_block.direction) {
            case(directions.UP):
                new_block_positions = [last_block.x_position, last_block.y_position + block_to_block];
                break;
            case(directions.RIGHT):
                new_block_positions = [last_block.x_position + block_to_block, last_block.y_position];
                break;
            case(directions.DOWN):
                new_block_positions = [last_block.x_position, last_block.y_position - block_to_block];
                break;
            case(directions.LEFT):
                new_block_positions = [last_block.x_position - block_to_block, last_block.y_position];
                break;
        }
        this.blocks.push(new block(new_block_positions[0], new_block_positions[1], last_block.direction));
    }
    move() {
        for (var index = 0; index < this.blocks.length; index++) {
           
            block = this.blocks[index];
            var new_x, new_y, new_direction;
            if (index == 0) {
                new_direction = block.direction;
            } else {
                new_direction = this.blocks[index - 1].direction;
            }
            switch(block.direction) {
                case(directions.UP):
                    new_x = block.x_position, new_y = block.y_position - move_distance;
                    break;
                case(directions.RIGHT):
                    new_x = block.x_position + move_distance, new_y = block.y_position;
                    break;
                case(directions.DOWN):
                    new_x = block.x_position, new_y = block.y_position + move_distance;
                    break;
                case(directions.LEFT):
                    new_x = block.x_position - move_distance, new_y = block.y_position;
                    break;
            }
            block.set_position(new_x, new_y, new_direction);
        }
    }
    change_head_direction(keycode) {
        var head_block = this.blocks[0];
        switch(keycode) {
            case(keycodes.W || keycodes.ARROW_UP):
                if (head_block.direction != directions.DOWN) {
                    head_block.direction = directions.UP;
                }
                break;
            case(keycodes.D || keycodes.ARROW_RIGHT):
                if (head_block.direction != directions.LEFT) {
                    head_block.direction = directions.RIGHT;
                }
                break;
            case(keycodes.S || keycodes.ARROW_DOWN):
                if (head_block.direction != directions.UP) {
                    head_block.direction = directions.DOWN;
                }
                break;
            case(keycodes.A|| keycodes.ARROW_LEFT):
                if (head_block.direction != directions.RIGHT) {
                    head_block.direction = directions.LEFT;
                }
                break;
        }
    }
}

class block {
    constructor (x_position, y_position, direction) {
        this.x_position = x_position;
        this.y_position = y_position;
        this.direction = direction;
    }
    set_position (new_x, new_y, new_direction) {
        if (new_x > windowWidth) {
            new_x = new_x - windowWidth;
        } else if (new_x < 0) {
            new_x = new_x + windowWidth;
        } if (new_y > windowHeight) {
            new_y = new_y - windowHeight;
        } else if (new_y < 0) {
            new_y = new_y + windowHeight;
        }
        this.x_position = new_x;
        this.y_position = new_y;
        this.direction = new_direction;
    }
    draw_block(color) {
        fill(color);
        rect(this.x_position, this.y_position, side_length, side_length);
    }
}