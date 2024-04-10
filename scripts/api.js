export class Github {
  constructor(){
    this.client_id = "15f5e620d23e89321b20";
    this.client_secret = "9bfabb180a9b655a61087e2f070c943d86f1d118";
    this.per_page = 10;
    this.sort = "asc"
  }
  //*api'den kullanıcı bilgilerini alma
  async fetchUserData(username) { 

    //*parametre olarak gelen kullanıcı adına göre istek attık 
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
//* kullanıcının repolarını almak için
const repoRes = await fetch(
  `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
);

//*Apiden aldığımız cevabı json yapısına çevirdik
const data = await profileRes.json();
const repos = await repoRes.json();



//fonksiyonun çağrıldığı yere bilgileri gönderme
return {data, repos}
  }
}
    