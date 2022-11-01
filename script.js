// Membuat Teks (Manipulasi Element)
const biodata = document.getElementById('biodata');
biodata.innerHTML = '<br> BIODATA ';

// Membuat Teks (Manipulasi Element)
const data = document.getElementById('data');
data.innerHTML = ' <tr> <td>Nama</td> <td>: Ryco Afta Gian Aidil</td> <tr> <td>NIM</td> <td>: 120140159</td> </tr> <tr> <td>Jenis Kelamin</td> <td>: laki-laki</td> </tr> <tr> <td>Prodi</td> <td>: Teknik Informatika</td> </tr> </tr>';

// Membuat Teks (Manipulasi Element)
const nama = document.getElementById('nama');
nama.innerHTML = '<br> <br> <br> <br> <br> Ryco Afta Gian Aidil';

// Membuat Teks (Manipulasi Element)
const tentang = document.getElementById('tentang');
tentang.innerHTML = '<tr> <h2>TENTANG</h2>';

// Events Handler (onClick)
function testFunction() {
    var n = "Halo Saya Ryco, saya memiliki cita-cita kedepannya adalah keadaan di mana uang yang saya miliki cukup untuk membiayai kehidupan untuk jangka waktu yang lama atau biasa disebut Financial Freedom. Ini merupakan cita-cita utama saya karena dapat memengaruhi cita-cita yang lainnya, dengan tercukupnya financial maka saya dapat membantu keluarga, masyarakat sekitar dan pekerjaan saya yang saya kerjakan akan maksimal karena saya tidak tidak bekerja untuk uang. Untuk itu saya akan meningkatkan kecerdasan keuangan, menabung dari hasil kerja lalu Investasi, memiliki Passive Income dan memiliki bisnis";
    var hasil =document.getElementById("hasil");
    hasil.innerHTML = n;
    hasil.style.backgroundColor = 'white';
}

// Membuat Teks (Manipulasi Element)
const pengalaman = document.getElementById('pengalaman');
pengalaman.innerHTML = '<h2>PENGALAMAN</h2> <ul> <li><strong>Pengalaman SMA</strong> <ul> <li>Mengikuti lomba 02SN komputer</li> </ul> </li> <li><strong>Pengalaman Kuliah</strong> <ul> <li>Pelaksanaan PKM Robotin Itera</li> <li>Pelaksanaan PKM PLC Itera</li> <li>Asprak PKS 1 tahun 2021</li> <li>Asprak PKS 1 tahun 2022</li> </ul> </li> </ul>';

// Membuat Teks (Manipulasi Element)
const pendidikan = document.getElementById('pendidikan');
pendidikan.innerHTML = ' <h2> RIWAYAT PENDIDIKAN</h2> <ul> <li> <span>SDN 4 Panaragan jaya (2008-2014)</span> </li> <li> <span>SMPN 2 Tulang Bawang Tengah (2014-2017)</span> </li> <li> <span>SMAN 1 Tulang Bawang Tengah 2017-2020</span> </li> <li> <span>Institut Teknologi Sumatera (2020-Sekarang)</span> </li> </ul>';

// Membuat Teks (Manipulasi Element)
const kontak = document.getElementById('kontak');
kontak.innerHTML = ' <table> <h2>INFORMASI KONTAK</h2> <tr> <td>HP/WA</td>     <td>: 08537979612</td> </tr>  <tr>     <td>Email</td> <td><a href="">: rikolampung9@gmail.com</a></td> </tr> </table>';

// Membuat Element (Manipulasi Node)
function saran() {
    const inputElement = document.querySelector('#masukan'); // Input Elemen
    const Name = inputElement.value; // Mengambil input

    if(!Name) return alert('Input kosong, ulangi'); // Pengecekan Data input

    const el = document.createElement('li'); // Tambah data pada list.
    el.innerText = Name;
    document.querySelector('#Detail').appendChild(el);

    inputElement.value = ''; // Membersihkan Input
}