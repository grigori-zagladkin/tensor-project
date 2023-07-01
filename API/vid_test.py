import cv2 as cv
import numpy as np
import numpy as np
import time
from constants import COLOR_HUE_RANGE


def get_contour(image, color, mask): 
    contours, hierarchy = cv.findContours(mask.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
    
    contours_counter = 0

    for contour in contours: 
        rect = cv.minAreaRect(contour)
        box = cv.boxPoints(rect)
        box = np.int0(box)
        area = cv.contourArea(contour)

        rect_area = int(rect[1][0] * rect[1][1]) 

        if 200 < area < 10000 and rect_area*0.7 < area:
            contours_counter +=1

            # M = cv.moments(contour)
            # if M["m00"] != 0:
            #     cX = int(M["m10"] / M["m00"])
            #     cY = int(M["m01"] / M["m00"])
            # else:
            #     cX, cY = 0, 0

            # cv.circle(image, (cX, cY), 3, (255, 255, 255), -1)
            # cv.putText(image, f"{contours_counter}", (cX - 25, cY - 25), cv.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 255), 2)

            # cv.drawContours(image, [box], -1, (0, 255, 0), 3)

    return contours_counter

def get_trashes_and_hvc_for_rgb(image):
    hcv_img = cv.cvtColor(image, cv.COLOR_BGR2HSV)
    threshes = {}
    res = {}
    counts = {}
    for key, value in COLOR_HUE_RANGE.items():
        hcv_min = np.array([value[0], 55, 20])
        hcv_max = np.array([value[1], 255, 255])
        thresh = cv.inRange(hcv_img, hcv_min, hcv_max)
        res[key] = get_contour(hcv_img, key, thresh)
        
    return res


capture = cv.VideoCapture(0 + cv.CAP_DSHOW)
capture.set(cv.CAP_PROP_FPS, 30)

while True:
    ret, frame = capture.read()

    if ret is True:
        result = get_trashes_and_hvc_for_rgb(frame)


        k = cv.waitKeyEx(100)
        if k == 27:  # ESC
            break
    else:
        break

cv.waitKey(0)
capture.release()


cv.destroyAllWindows()

# Перевод в hcv
# Получение цветов (нахождение маски)
# Через маску будет определять контуры полученных изображений





