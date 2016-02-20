argLength = process.argv.length;
sum = 0;
for (var x = 2; x < argLength; x++) {
	sum += +process.argv[x];
}
console.log(sum);