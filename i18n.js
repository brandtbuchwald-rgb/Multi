// === Translation dictionaries ===
const i18n = {
  en: {
    title:"Rediscover ATK SPD Calculator", buffs:"Base & Buffs",
    class:"Class", weapon:"Weapon", char:"Characteristic", col:"Atk SPD Colour",
    guild:"Guild Buff", guildLabel:"Guild", secret:"Secret Tech", equip:"Equipment ATK SPD", rune:"Rune ATK SPD",
    pet:"Pet Gear", quicken:"Quicken", fury:"Fury Lv.10", on:"On", off:"Off",
    berserker:"Berserker", paladin:"Paladin", ranger:"Ranger", sorcerer:"Sorcerer",
    required:"Required ATK SPD", final:"Final ATK SPD",
    optimizer:"Optimizer", optSet:"Optimize for Set", apply:"Apply Optimal", alts:"Alternates", creator:"Creator",
    none:"None", heroic:"Heroic (+7%)", swift:"Swift (+10%)",
    normal:"Normal (+0%)", blue:"Blue (+10%)", orange:"Orange (+20%)", purple:"Purple (+30%)",
    petNone:"None", petB:"B (6%)", petA:"A (9%)", petS:"S (12%)",
    qNone:"None", q1:"Lv.1 (+1%)", q2:"Lv.2 (+2%)", q3:"Lv.3 (+3%)", q4:"Lv.4 (+4%)", q5:"Lv.5 (+5%)",
    setOriginal:"Original", setPrimal:"Primal", setChaos:"Chaos", setAbyss:"Abyss", setPvP:"PVP/Boss"
  },
  ko: {
    title:"재발견 공격 속도 계산기", buffs:"기본 & 버프",
    class:"클래스", weapon:"무기", char:"특성", col:"공속 색상",
    guild:"길드 버프", guildLabel:"길드", secret:"비밀 기술", equip:"장비 공격 속도", rune:"룬 공격 속도",
    pet:"펫 장비", quicken:"신속", fury:"분노 Lv.10", on:"켜기", off:"끄기",
    berserker:"버서커", paladin:"팔라딘", ranger:"레인저", sorcerer:"소서러",
    required:"필요한 공격 속도", final:"최종 공격 속도",
    optimizer:"최적화", optSet:"세트 최적화", apply:"최적 적용", alts:"대안", creator:"제작자",
    none:"없음", heroic:"영웅적 (+7%)", swift:"신속 (+10%)",
    normal:"일반 (+0%)", blue:"파랑 (+10%)", orange:"주황 (+20%)", purple:"보라 (+30%)",
    petNone:"없음", petB:"B (6%)", petA:"A (9%)", petS:"S (12%)",
    qNone:"없음", q1:"Lv.1 (+1%)", q2:"Lv.2 (+2%)", q3:"Lv.3 (+3%)", q4:"Lv.4 (+4%)", q5:"Lv.5 (+5%)",
    setOriginal:"오리지널", setPrimal:"원시", setChaos:"카오스", setAbyss:"심연", setPvP:"PVP/보스"
  }
  // 👉 Add your other languages (ph, id, es, vi) here the same way
};

// === Apply translations ===
function applyLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang] && i18n[lang][key]){
      el.textContent = i18n[lang][key];
    }
  });
}

// Init
document.addEventListener("DOMContentLoaded", ()=>{
  applyLang("en"); // default
  document.getElementById("langSwitcher")
    ?.addEventListener("change", e=>applyLang(e.target.value));
});
