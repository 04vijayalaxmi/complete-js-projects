document.getElementById('generateBtn').addEventListener('click', generateLoremIpsum);

function generateLoremIpsum() {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan ex id dui bibendum, et suscipit nisl viverra. Praesent quis leo at orci tincidunt fermentum. Ut vehicula magna ac lacus finibus, et tincidunt elit venenatis. Integer pharetra orci quis orci volutpat, sed vehicula sapien gravida. Nulla nec nulla felis. Nullam nec malesuada libero, vel malesuada enim.";
    
    document.getElementById('loremIpsumText').textContent = loremText;
}