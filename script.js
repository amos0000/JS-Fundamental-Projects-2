const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmi: function () {
      return this.mass / (this.height ** 2);
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    bmi: function () {
      return this.mass / (this.height ** 2);
    }
  };    
  
  if (john.bmi() > mark.bmi()) {
    console.log(`${john.fullName}'s BMI ${john.bmi()} is higher than ${mark.fullName}'s BMI ${mark.bmi()}`);
  } else {
    console.log(`${mark.fullName}'s BMI ${mark.bmi()} is higher than ${john.fullName}'s BMI ${john.bmi()}`);
  }