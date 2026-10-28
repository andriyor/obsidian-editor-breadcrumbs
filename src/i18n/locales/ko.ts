import type { TranslationStrings } from '../types';

export const ko: TranslationStrings = {
  showFolderPath: {
    name: '폴더 경로 표시',
    desc: '파일 이름 앞에 폴더 경로(폴더 › 하위 폴더)를 표시합니다.',
  },
  showFileName: {
    name: '파일 이름 표시',
    desc: '현재 파일 이름을 탐색 경로에 표시합니다.',
  },
  maxSegmentLength: {
    name: '각 항목의 최대 글자 수',
    desc: '이보다 긴 이름은 말줄임표(…)로 잘려 표시됩니다.',
    errorMin: '1 이상의 숫자를 입력하세요.',
  },
  editFollowView: {
    name: '편집 모드에서 뷰 기준선 따르기',
    desc: '꺼짐: 이전처럼 커서 위치를 따릅니다. 켜짐: 아래의 편집 모드 기준선 위치를 따르므로, 클릭하지 않고 스크롤만 해도 탐색 경로가 갱신됩니다.',
  },
  editAnchorPercent: {
    name: '편집 모드 기준선 위치 (%)',
    desc: '편집기에서 제목이 전환되는 수직 위치: 0 = 맨 위, 50 = 중간, 100 = 맨 아래. "편집 모드에서 뷰 기준선 따르기"가 켜져 있을 때만 적용됩니다.',
    errorRange: '0부터 100 사이의 정수를 입력하세요.',
  },
  readingAnchorPercent: {
    name: '읽기 모드 기준선 위치 (%)',
    desc: '읽기 뷰에서 제목이 활성화되는 수직 위치: 0 = 맨 위, 50 = 중간, 100 = 맨 아래.',
    errorRange: '0부터 100 사이의 정수를 입력하세요.',
  },
  showInReadingMode: {
    name: '읽기 모드에서 표시',
    desc: '읽기(미리보기) 모드에서도 스크롤 위치에 맞춰 탐색 바를 표시합니다.',
  },
  showInTabHeader: {
    name: '탭 헤더에 제목 탐색 경로 표시',
    desc: 'Obsidian 1.14+ 기본 탭 제목 표시줄의 폴더/파일 경로 바로 뒤에 제목 브레드크럼을 렌더링합니다. 기본 경로에 이미 표시되므로 폴더와 파일 경로는 생략됩니다.',
  },
  hideWhenNoHeadings: {
    name: '제목이 없을 때 숨기기',
    desc: '제목이 하나도 없는 노트에서는 탐색 바를 완전히 숨깁니다.',
  },
};
