const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const chart = document.getElementById("chart");

const maxAmount = Math.max(...data.map((item) => item.amount));

data.forEach((item) => {
  const bar = document.createElement("div");

  bar.classList.add(
    "flex",
    "w-full",
    "flex-col",
    "items-center",
    "gap-[11px]",
    "max-w-[50.365px]",
    "sm:gap-2",
    "group",
    "cursor-pointer",
    "justify-end",
  );

  const height = ((item.amount / maxAmount) * 100 * 150) / 100;

  bar.innerHTML = `
            <div
              class="relative w-full rounded-[3px] transition-colors sm:rounded-[5px]"
              style="height: ${height}px"
            >
              <!-- tooltip -->
              <div
                class="absolute -top-12 left-1/2 hidden -translate-x-1/2 rounded-[3px] bg-dark-brown p-2 text-[15px] font-bold leading-none text-very-pale-orange group-hover:block sm:rounded-[5px] sm:text-lg"
              >
                $${item.amount}
              </div>
              <!-- tooltip -->
            </div>
            <p class="text-xs leading-none text-medium-brown sm:text-[15px]">
              ${item.day}
            </p>
            `;

  if (item.amount === maxAmount) {
    bar.children[0].classList.add("bg-cyan", "hover:bg-[#B4E0E5]");
  } else {
    bar.children[0].classList.add("bg-soft-red", "hover:bg-[#FF9B86]");
  }

  chart.appendChild(bar);
});
