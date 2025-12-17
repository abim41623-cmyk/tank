function showDetails(tankType) {
    const details = {
        tiger: "Tiger I adalah simbol kekuatan Jerman. Meskipun sangat kuat, tank ini mahal diproduksi dan sulit diperbaiki di lapangan.",
        sherman: "M4 Sherman adalah tank yang sangat andal dan mudah diproduksi massal. Keunggulan utamanya adalah dukungan logistik dan jumlahnya yang banyak.",
        t34: "T-34 dianggap sebagai desain tank paling berpengaruh di dunia berkat zirahnya yang miring (sloped armor) dan mobilitas tinggi."
    };

    alert(details[tankType]);
}
