// Girdi Değişkenleri
let urunTipi,urunListesi,urunAdedi,urunTaksidi;

//Çıktı Değişkenleri
let araToplam,toplamTutar,kargoUcreti=10;

// Global Döngü Değişkeni
let i;

//Global nesne değişkenleri
let liste,secenek;

// Dizi tipindeki değişkenler
let erkekParfumleri=["Calvin Clean",100,"Lacoste",150,"Axe",50,"First Class",200];
let kadinParfumleri=["Burbery",100,"Avon",150,"She",50,"Ninna Ricci",200];

// Parfümleri Ürün Listesine sıralamak için

function urunleriGetir()
{
    document.querySelectorAll('#urunListesi option').forEach(option => option.remove()); // Urun listesini temizlemek için erkek ile kadın ürünleri üst üste binmesin diye.
    
    liste = document.getElementsByName("urunTipi");
    
    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked){
            urunTipi = liste[i].value;
        }
    }
    console.log(urunTipi);

    if(urunTipi == "E"){
        for(i=0;i<erkekParfumleri.length;i=i+2){
            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text =erkekParfumleri[i];
            secenek.value=erkekParfumleri[i+1];

        }
    }else if(urunTipi == "K"){
        for(i=0;i<kadinParfumleri.length;i=i+2){
            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text =kadinParfumleri[i];
            secenek.value=kadinParfumleri[i+1];
        }
    }
}
// Ürün Adedini doldurmak için

function urunAdediDoldur(){
    for(i=1;i<11;i++){
        secenek = document.createElement("option");
        liste = document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

// Taksit Sayısını belirlemek için

function urunTaksidiDoldur(){
    for(i=0;i<13;i=i+3){
        secenek = document.createElement("option");
        liste = document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

// Fiyat Hesaplama

function fiyatHesaplama(){
    liste = document.getElementById('urunListesi');
    urunListesi = liste[liste.selectedIndex].value;    

    liste = document.getElementById('urunAdedi');
    urunAdedi = liste[liste.selectedIndex].value;       

    liste = document.getElementById('urunTaksidi');   
    urunTaksidi = liste[liste.selectedIndex].value;
 

    araToplam = urunListesi*urunAdedi;
    if(urunTaksidi == 3){
        araToplam = araToplam*1.1
    }else if(urunTaksidi == 6){
        araToplam = araToplam*1.3
    }else if(urunTaksidi == 9){
        araToplam = araToplam*1.5
    }
    else if(urunTaksidi == 12){
        araToplam = araToplam*2
    }
    document.getElementById("txtAraToplam").value = araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value = urunListesi;
    
    
    if(araToplam<150){
        document.getElementById("txtKargo").value = kargoUcreti;
        toplamTutar = araToplam + kargoUcreti;
    }else if(araToplam>150){
        document.getElementById("txtKargo").value = 0;

        toplamTutar = araToplam;
    }
    document.getElementById("sonuc").value = toplamTutar.toFixed(2);
    document.getElementById("sonuc").style.backgroundColor="red";
    document.getElementById("sonuc").style.border="2px solid black";
    document.getElementById("sonuc").style.fontSize="1.3rem";
    document.getElementById("sonuc").style.color="black";
    document.getElementById("sonuc").style.textAlign="center";
}
    