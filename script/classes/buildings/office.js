
class Office extends Building {
    constructor(pos, maxEmployeeCount) {
        super(pos);

        this.employeeCount = {current: 0, max: maxEmployeeCount};
        this.employees = [];
    }

    update() {
        
    }
    
    render() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.pos.x, this.pos.y, 50, 50);
    }

    employ(person) {
        this.employeeCount.current++;
        this.employees.push(person);
    }
}