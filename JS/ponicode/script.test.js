const rewire = require("rewire")
const script = rewire("../script")
const slideNext = script.__get__("slideNext")
