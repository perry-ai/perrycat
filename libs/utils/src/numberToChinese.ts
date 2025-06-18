/**
 * 将数字转换为中文大写
 * @param num 要转换的数字(0-999999999999.99)
 * @returns 中文大写字符串
 */
export function numberToChinese(num: number | string): string {
  if (typeof num === 'string') {
    num = parseFloat(num);
    if (isNaN(num)) {
      throw new Error('输入必须是有效数字');
    }
  }

  if (num < 0 || num > 999999999999.99) {
    throw new Error('数字范围必须在0-999999999999.99之间');
  }

  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const units = ['', '拾', '佰', '仟'];
  const bigUnits = ['', '万', '亿'];
  const decimalUnits = ['角', '分'];

  // 处理小数部分
  let strNum = num.toString();
  let [integerPart, decimalPart] = strNum.split('.');

  // 处理整数部分
  let chineseInteger = '';
  const integerDigits = integerPart.split('').reverse();
  
  // 每4位一组处理
  for (let i = 0; i < integerDigits.length; i += 4) {
    let group = integerDigits.slice(i, i + 4);
    let groupStr = '';
    
    for (let j = 0; j < group.length; j++) {
      const digit = parseInt(group[j]);
      if (digit === 0) {
        // 处理连续的零
        if (j > 0 && parseInt(group[j-1]) !== 0) {
          groupStr = digits[0] + groupStr;
        }
      } else {
        groupStr = digits[digit] + units[j] + groupStr;
      }
    }
    
    // 添加大单位(万、亿)
    const bigUnitIndex = Math.floor(i / 4);
    if (groupStr) {
      groupStr += bigUnits[bigUnitIndex];
    }
    
    chineseInteger = groupStr + chineseInteger;
  }

  // 处理小数部分
  let chineseDecimal = '';
  if (decimalPart) {
    decimalPart = decimalPart.substring(0, 2); // 最多处理两位小数
    for (let i = 0; i < decimalPart.length; i++) {
      const digit = parseInt(decimalPart[i]);
      if (digit !== 0) {
        chineseDecimal += digits[digit] + decimalUnits[i];
      }
    }
  }

  // 合并结果
  let result = '';
  if (chineseInteger) {
    result = chineseInteger + '元';
  }
  if (chineseDecimal) {
    result += chineseDecimal;
  } else if (chineseInteger) {
    result += '整';
  }

  // 处理全零的情况
  if (!result) {
    result = digits[0] + '元整';
  }

  return result;
}
