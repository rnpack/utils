package com.margelo.nitro.rnpack.utils
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class Utils : HybridUtilsSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
