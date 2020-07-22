const fieldMeta = [{
    name: "Sate",
    choices: [{
            name: "CA",
            coefficient: 542.13
    }, {
            name: "WA",
            coefficient: 61.2
    }, {
            name: "AZ",
            coefficient: 983.2
    }, {
            name: "NV",
            coefficient: -218.18
    }, {
            name: "OR",
            coefficient: -23.21
    }]
}, {
    name: "Coverage",
    choices: [{
            name: "Basic",
            coefficient: -1132.31
    }, {
            name: "Extended",
            coefficient: -23.67
    }, {
            name: "Premium",
            coefficient: 943.61
    }]
}, {
    name: "Education",
    choices: [{
            name: "Bachelor",
            coefficient: 62.35
    }, {
            name: "College",
            coefficient: 69.62
    }, {
            name: "Master",
            coefficient: 98.32
    }, {
            name: "HS or below",
            coefficient: -102.3
    }, {
            name: "Doctor",
            coefficient: 88.12
    }]
}, {
    name: "Employment Status",
    choices: [{
            name: "Employed",
            coefficient: 37.87
    }, {
            name: "Unemployed",
            coefficient: -237.38
    }, {
            name: "Medical Leave",
            coefficient: 98
    }, {
            name: "Disabled",
            coefficient: 13.9
    }, {
            name: "Retired",
            coefficient: 86.61
    }]
}, {
    name: "Income",
    coefficient: 0.0664
}, {
    name: "Location Code",
    choices: [{
            name: "Suburban",
            coefficient: 734.47
    }, {
            name: "Rural",
            coefficient: -323.43
    }, {
            name: "Urban",
            coefficient: 32.6
    }]
}, {
    name: "Monthly Premium",
    coefficient: 2.34
}, {
    name: "Number of Policies",
    coefficient: 112.49
}, {
    name: "Sales Channel",
    choices: [{
            name: "Agent",
            coefficient: 1403.32
    }, {
            name: "Call Center",
            coefficient: -189.34
    }, {
            name: "Web",
            coefficient: -2473.32
    }, {
            name: "Branch",
            coefficient: 238.94
    }]
}, {
    name: "Vehicle Class",
    choices: [{
            name: "Two-Door Car",
            coefficient: 248.2
    }, {
            name: "Four-Door Car",
            coefficient: 349.73
    }, {
            name: "SUV",
            coefficient: -765.34
    }, {
            name: "Lux SUV",
            coefficient: 836.32
    }, {
            name: "Sports car",
            coefficient: -153.63
    }]
}];

const intercept = 3821.35;
const totalLabel = "Projected Total LTV: $";

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
