import { detectInAppBrowser } from '.';

describe('detectInAppBrowser', () => {
  it("should be 'is_chrome_ios'", () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/91.0.4472.80 Mobile/15E148 Safari/604.1';
    expect(detectInAppBrowser(ua)).toBe('is_chrome_ios');
  });

  it("should be 'is_facebook_ios'", () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone13,3;FBMD/iPhone;FBSN/iOS;FBSV/14.5;FBSS/3;FBID/phone;FBLC/ja_JP;FBOP/5]';
    expect(detectInAppBrowser(ua)).toBe('is_facebook_ios');
  });

  it("should be 'is_facebook_android'", () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 11; Pixel 4 Build/RQ2A.210405.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/324.0.0.48.120;]';
    expect(detectInAppBrowser(ua)).toBe('is_facebook_android');
  });

  it("should be 'is_instagram_ios'", () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 193.0.0.29.121 (iPhone13,3; iOS 14_5; ja_JP; ja-JP; scale=3.00; 1170x2532; 299401192) NW/3';
    expect(detectInAppBrowser(ua)).toBe('is_instagram_ios');
  });

  it("should be 'is_instagram_android'", () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 11; Pixel 4 Build/RQ2A.210405.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 Instagram 193.0.0.45.120 Android (30/11; 440dpi; 1080x2236; Google/google; Pixel 4; flame; flame; ja_JP; 300078998)';
    expect(detectInAppBrowser(ua)).toBe('is_instagram_android');
  });

  it("should be 'is_line_ios'", () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari Line/11.10.0';
    expect(detectInAppBrowser(ua)).toBe('is_line_ios');
  });

  it("should be 'is_line_android'", () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 11; Pixel 4 Build/RQ2A.210405.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36 Line/11.10.2/IAB';
    expect(detectInAppBrowser(ua)).toBe('is_line_android');
  });

  it("should be 'maybe_safari_ios'", () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1';
    expect(detectInAppBrowser(ua)).toBe('maybe_safari_ios');
  });

  it("should be 'maybe_chrome_android'", () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36';
    expect(detectInAppBrowser(ua)).toBe('maybe_chrome_android');
  });

  it('should return null', () => {
    const ua = 'never show useragent';
    expect(detectInAppBrowser(ua)).toBeNull();
  });
});
