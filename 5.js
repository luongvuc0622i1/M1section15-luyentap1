let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellations = ["UrsaMinor", "Tarurus", "Cygnus", "Lyra", "Aquila", "UrsaMajor", "Leo"];


function check_star(star) {
    for (let i = 0; i < stars.length; i++) {
        if (star == stars[i]) {
            return constellations[i];
        } else {
            return "Không tìm thấy chòm sao";
        }
    }
}
let star = prompt("Nhập vào tên ngôi sao: ");
document.write(check_star(star));