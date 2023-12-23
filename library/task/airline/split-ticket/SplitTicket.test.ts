import { Ticket, TicketSplitter } from './SplitTicket'; // Thay 'yourFileName' bằng tên tệp chứa mã nguồn

describe('Ticket', () => {
  test('getRoute trả về đúng hành trình', () => {
    const ticket = new Ticket('HCMC to Hanoi', 200);
    expect(ticket.getRoute()).toBe('HCMC to Hanoi');
  });

  test('getPrice trả về đúng giá', () => {
    const ticket = new Ticket('HCMC to Hanoi', 200);
    expect(ticket.getPrice()).toBe(200);
  });
});

describe('TicketSplitter', () => {
  test('splitTicket tách vé thành hai phần', () => {
    const originalTicket = new Ticket('HCMC to Hanoi', 200);
    const [ticket1, ticket2] = TicketSplitter.splitTicket(originalTicket, 'to');

    expect(ticket1.getRoute()).toBe('HCMC');
    expect(ticket1.getPrice()).toBe(100); // 200 / 2
    expect(ticket2.getRoute()).toBe('Hanoi');
    expect(ticket2.getPrice()).toBe(100); // 200 / 2
  });

  test('splitTicket ném lỗi khi điểm chia không hợp lệ', () => {
    const originalTicket = new Ticket('HCMC to Hanoi', 200);
    const invalidSplit = () => TicketSplitter.splitTicket(originalTicket, 'invalid');
    expect(invalidSplit).toThrow('Invalid split point');
  });
});
