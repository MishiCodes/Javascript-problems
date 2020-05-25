package com.company;

public class Main {

    public static void main(String[] args) {
        String S = "loveleetcode";
        char C = 'e';

        public int[] shortestToChar(String S, char C) {
            int n = S.length();
            int [] output_arr = new int[n];
            int c_position = -n;

            for (int i = 0; i < n; i++) {
                if (S.charAt(i) == C) {
                    c_position = i;
                }
                output_arr[i] = i - c_position;
            }

            for (int i = n-1; i >0; i--) {
                if (S.charAt(i) == C) {
                    c_position = i;
                }
                output_arr[i] = Math.min(output_arr[i], Math.abs(i-c_position));
            }
            return output_arr;
        }
    }

    int result[] = shortestToChar(S,C);
}