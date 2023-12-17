// if_else_statements.ts

export function isEvenNumber(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
export function getGrade(score: number): string {
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
 }
  