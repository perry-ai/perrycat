import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { numberToChinese } from '@perrycat/utils';

const app: Express = express();
const port = 3000;

// 中间件配置
app.use(cors());
app.use(bodyParser.json());

// 数字转中文大写接口
app.post('/api/number-to-chinese', (req: Request, res: Response): void => {
  try {
    const { number } = req.body;
    if (number === undefined || number === null) {
      res.status(400).json({ error: '请提供number参数' });
      return;
    }
    
    const result = numberToChinese(number);
    res.json({ result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : '未知错误';
    res.status(400).json({ error: message });
  }
});

// 启动服务
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
