
public  static boolean isNum(int max){
	        final int standardVal = 10;
	        if(max < standardVal){
	            return true;
	        }
	        return false;
	    }
	    public static int getSum(int start, int end){
	        int array[] = {3,8,9};
	        int max = 0;
	        end = array.length;
	        for(int i=start; i<end; i++){
	            if(max < array[i]) {
	            	max = array[i];
	            	if(max > 10) {
	            		return 0;
	            	}
	           }
	        }
	        System.out.println(max);
	        return max;
	    }
	    public static void main(String[] args) {
        int start = 0;
        int end = 0;
        int max = getSum(start, end);
        boolean isFlag = isNum(max);
        System.out.print(isFlag);