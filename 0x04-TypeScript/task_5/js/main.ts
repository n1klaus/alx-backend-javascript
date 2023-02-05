interface MajorCredits {
  credits: number;
  [propName: string]: any;
}

interface MinorCredits {
  credits: number;
  [propName: string]: any;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return {"credits": subject1 + subject2, "label": "Profits"};
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {"credits": subject1 + subject2, "total": "deductions"};
}
