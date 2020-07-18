const fieldMeta = [{
    name: "first field",
    coefficient: 2.2
}, {
    name: "price",
    coefficient: 3.9
}, {
    name: "risk",
    coefficient: 3.9
}, {
    name: "State",
    choices: [{
            name: "CA",
            coefficient: 23
        }, {
            name: "AZ",
            coefficient: 3
        }
    ]
}];

const intercept = 4;
const totalLabel = "Projected Total Cusotmer Life Time Value: $";

d3.select("#total-value").text(totalLabel);

const fields = d3
    .select(".fields");
    
const divs = fields.selectAll("div")
    .data(fieldMeta)
    .enter()
    .append("div");

divs
    .append("label")
    .text(d => d.name);

const inputs = divs.each(function (d){
    const self = d3.select(this);
    const elementAppendFunc = d.choices === undefined
        ? appendFieldScalar
        : appendFieldDropDown;
    elementAppendFunc(self, d)
}).selectAll('select,input');

function appendFieldDropDown(self, d){
    const select = self.append("select")
    select.selectAll("option")
        .data(d.choices)
        .enter()
        .append('option')
        .text(choice => choice.name)    
        .attr("value", choice => choice.coefficient);
    select.on('change', onChangeCurry(intercept));
}

function appendFieldScalar(self, d){
    self.append("input")
        .attr("type", "number")
        .on('input', onChangeCurry(intercept));
}

function onChangeCurry(intercept){
    return function() {
        const values = [intercept];
        inputs.each(function(d) {
            const weightedValueFunc = d.choices === undefined
                ? getWeightedValueScalar
                : getWeightedValueDropDown;
            const userInput = Number(this.value);
            const weightedValue = weightedValueFunc(d, userInput);
            values.push(weightedValue);
        });
        const total = values.reduce((agg, cur) => agg + cur);
        d3.select("#total-value").text(totalLabel + total.toFixed(2));
    }
}

function getWeightedValueScalar(d, input){
    const coef = d.coefficient;
    return input * coef;
}

function getWeightedValueDropDown(d, input){
    return input;
}