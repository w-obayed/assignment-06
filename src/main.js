const blood = prompt("please type your bloodgroup :");

const result = members.filter((data) => data.bloodgroup === blood);

result.map((item) => {
  console.log(`${item.name} Day Count : ${day_count(item.last_donate_date)}`);
});
