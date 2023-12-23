// Trong ngành hàng không, khái niệm "tách vé" (ticket split) thường được sử dụng để mô tả quá trình chia nhỏ một đặt chỗ hoặc vé máy bay thành các phần nhỏ hơn, thường là để hưởng lợi từ mức giá hoặc điều kiện đặt vé khác nhau. Hành động này có thể được thực hiện để tận dụng các ưu đãi, giảm giá, hoặc các điều kiện đặt vé đặc biệt.
export class Ticket {
    constructor(private route: string, private price: number) {}
  
    getRoute(): string {
      return this.route;
    }
  
    getPrice(): number {
      return this.price;
    }
  }
  
 export class TicketSplitter {
    static splitTicket(ticket: Ticket, splitPoint: string): [Ticket, Ticket] {
      const routeParts = ticket.getRoute().split(splitPoint);
  
      if (routeParts.length !== 2) {
        throw new Error('Invalid split point');
      }
  
      const [part1, part2] = routeParts;
      const pricePerPart = ticket.getPrice() / 2;
  
      const ticket1 = new Ticket(part1.trim(), pricePerPart);
      const ticket2 = new Ticket(part2.trim(), pricePerPart);
  
      return [ticket1, ticket2];
    }
  }
  
  // Sử dụng
  const originalTicket = new Ticket('HCMC to Hanoi', 200);
//   console.log('Original Ticket:', originalTicket.getRoute(), originalTicket.getPrice());
  
  try {
    const [ticket1, ticket2] = TicketSplitter.splitTicket(originalTicket, 'to');
    // console.log('Split Ticket 1:', ticket1.getRoute(), ticket1.getPrice());
    // console.log('Split Ticket 2:', ticket2.getRoute(), ticket2.getPrice());
  } catch (error) {
    // console.error(error.message);
  }
  