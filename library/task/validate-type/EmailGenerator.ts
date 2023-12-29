class EmailGenerator {
    generateRandomEmail(): string {
      const username = this.generateRandomString(8);
      const domain = this.generateRandomString(8);
      const tld = this.generateRandomString(3);
  
      return `${username}@${domain}.${tld}`;
    }
  
    private generateRandomString(length: number): string {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }
  
  const emailGenerator = new EmailGenerator();
  
  // Tạo ra 10 địa chỉ email ngẫu nhiên để kiểm thử
  for (let i = 0; i < 10; i++) {
    const randomEmail = emailGenerator.generateRandomEmail();
    console.log(randomEmail);
  }
  